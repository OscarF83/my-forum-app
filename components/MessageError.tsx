
type ErrorMessageProps = {
  errorMessage: string;
};

export default function MessageError({errorMessage}: ErrorMessageProps) {
  return (
  <p className="w-80 text-2xl font-bold text-red-500">{errorMessage}</p>
  )
}