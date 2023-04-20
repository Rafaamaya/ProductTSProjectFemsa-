export const formatFeedDate = (date: Date) => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const incomingDate = new Date(date);
  const DD = incomingDate.getDate();
  const MM = months[incomingDate.getMonth()];
  const YY = incomingDate.getFullYear().toString();
  return `${DD} de ${MM}, ${YY}`;
};
