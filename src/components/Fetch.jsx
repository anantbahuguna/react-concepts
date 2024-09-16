import { useBasicFetch } from "./../concepts/fetch";
function BasicFetch() {
  const [data, status, error] = useBasicFetch("todos");

  return (
    <div>
      <p>status: {status}</p>
      <pre>data: {JSON.stringify(data, null, 2)}</pre>
      <p>error: {error}</p>
    </div>
  );
}

function SmartFetch() {}

export { BasicFetch };
