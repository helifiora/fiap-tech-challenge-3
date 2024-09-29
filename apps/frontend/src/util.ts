import * as v from "valibot";
import { formatDate } from "date-fns";
import { ptBR as locale } from "date-fns/locale";

export function formatPostDate(date: Date): string {
  return formatDate(date, "dd 'de' LLLL 'de' yyyy", { locale });
}

export function truncateText(text: string, maxQuantity: number): string {
  let clamped = text.slice(0, maxQuantity);
  if (clamped !== text) {
    clamped += "...";
  }

  return clamped;
}

export const idSchema = v.pipe(v.string(), v.uuid("Identificador inválido"));
