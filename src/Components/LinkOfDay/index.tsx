import { Link } from "react-router-dom";

interface Props {
  to: string;
  label: string;
}

export default function LinkOfDay({ to, label }: Props): JSX.Element {
  return (
    <Link to={to}>
      {label}
    </Link>
  )
}
