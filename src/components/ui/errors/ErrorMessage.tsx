interface ErrorMessageProps {
  title: string;
  message?: string;
}

const ErrorMessage = ({ title, message }: ErrorMessageProps) => (
  <div className="items-center justify-center w-full max-w-[60rem]">
    <h1 className="text-center text-xl text-red-600">{title}</h1>
    {message && <p className="text-center mt-2 text-gray-600">{message}</p>}
  </div>
);

export default ErrorMessage;
