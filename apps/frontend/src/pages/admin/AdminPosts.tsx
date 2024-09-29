import { Link } from "react-router-dom";
import IconEdit from "../../components/icons/IconEdit";
import IconTrash from "../../components/icons/IconTrash";
import { PostModel } from "../../model/post.model";
import { formatPostDate } from "../../util";
import classes from "./AdminPosts.module.scss";
import { useCallback, useMemo, useState } from "react";
import { ConfirmDialog } from "../../components/ConfirmDialog";
import { postGateway } from "../../gateway";
import Markdown from "react-markdown";

type Props = { items: PostModel[] };

export default function AdminPosts(props: Props) {
  const [itemToDelete, setItemToDelete] = useState<PostModel | null>(null);

  const [items, setItems] = useState(props.items);

  const onDelete = useCallback(() => {
    if (!itemToDelete) {
      return;
    }

    postGateway
      .delete(itemToDelete.id)
      .then(() => {
        const newItems = items.filter((s) => s.id !== itemToDelete.id);
        setItems(newItems);
        setItemToDelete(null);
      })
      .catch(() => {
        setItemToDelete(null);
      });
  }, [itemToDelete, items]);

  const messageToDelete = useMemo(
    () => itemToDelete?.title ?? "",
    [itemToDelete],
  );

  const isDeleteDialogOpen = useMemo(
    () => itemToDelete !== null,
    [itemToDelete],
  );

  if (props.items.length === 0) {
    return <p>Não há nenhuma postagem cadastrada</p>;
  }

  return (
    <>
      <ul>
        {items.map((item) => (
          <li className={classes["admin-post"]} key={item.id}>
            <div>
              <p className={`${classes["admin-post-date"]} mb-1`}>
                Postado em {formatPostDate(item.publishedAt)}
              </p>
              <h4 className={classes["admin-post-title"]}>
                <Link to={`/posts/${item.id}`}>
                  <Markdown>{item.title}</Markdown>
                </Link>
              </h4>
            </div>
            <div className={classes["admin-post-actions"]}>
              <button
                onClick={() => setItemToDelete(item)}
                className="button -square text-brand"
              >
                <IconTrash size={20} />
              </button>
              <Link
                to={`/posts/${item.id}/edit`}
                className="button -square text-brand"
              >
                <IconEdit size={20} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {itemToDelete && (
        <ConfirmDialog
          isOpen={isDeleteDialogOpen}
          message={messageToDelete}
          onClose={(value) => {
            if (value) {
              onDelete();
            } else {
              setItemToDelete(null);
            }
          }}
        />
      )}
    </>
  );
}
