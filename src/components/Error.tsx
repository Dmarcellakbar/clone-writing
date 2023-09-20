export function Error({ message }: { message: string }) {
  return (
    <div className="rounded bg-red-500 p-1 text-white text-xs">{message}</div>
  );
}
