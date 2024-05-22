export default function FormDebug({ data }) {
  return (
    <>
      <p>Output</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
