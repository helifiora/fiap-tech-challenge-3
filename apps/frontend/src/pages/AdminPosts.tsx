import { Link } from "react-router-dom";
import IconEdit from "../components/icons/IconEdit";
import IconTrash from "../components/icons/IconTrash";
import { PostModel } from "../model/post.model";
import { formatPostDate } from "../util";
import classes from "./AdminPosts.module.scss";
import { useMemo, useState } from "react";
import { ConfirmDialog } from "../components/ConfirmDialog";

type Props = { items: PostModel[] };

export default function AdminPosts(props: Props) {
  const [itemToDelete, setItemToDelete] = useState<PostModel | null>(null);

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
        {props.items.map((item) => (
          <li className={classes["admin-post"]} key={item.id}>
            <div>
              <p className={`${classes["admin-post-date"]} mb-1`}>
                Postado em {formatPostDate(item.publishedAt)}
              </p>
              <h4 className={classes["admin-post-title"]}>
                <Link to={`/${item.id}`}>{item.title}</Link>
              </h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button
                onClick={() => setItemToDelete(item)}
                className="button -square text-brand"
              >
                <IconTrash size={20} />
              </button>
              <Link
                to={`${item.id}/edit`}
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
              console.log("DELETEI!!!");
              setItemToDelete(null);
            } else {
              console.log("CANCELEI");
              setItemToDelete(null);
            }
          }}
        />
      )}
    </>
  );
}
