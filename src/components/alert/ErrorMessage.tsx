type Props = {
  message: string;
};
/**
 * TODO: 모달 활용
 */
export default function ErrorMessage({ message }: Props) {
  return <div>{message}</div>;
}
