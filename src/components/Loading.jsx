import useJsonFetch from "../hooks/useJsonFetch";

export default function Loading() {
  const { loading, data } = useJsonFetch(
    import.meta.env.VITE_APP_URL,
    'loading'
  )

  return (
    <div className="component">
      <h1 className="component__title">Индикатор загрузки</h1>
      <p className="component__content">
        {loading ? 'Loading...' : JSON.stringify(data)}
      </p>
    </div>
  )
}