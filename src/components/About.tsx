interface Props {
  title: string;
}

export const About = ({ title }: Props) => {
  return <div>{title}</div>;
};
