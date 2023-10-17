import useJsonFetch from "../hooks/useJsonFetch";

export default function Data() {
  const { data } = useJsonFetch(
    import.meta.env.VITE_APP_URL,
    'data'
  )

  return (
    data && <div className="component">
      <h1 className="component__title">Успешное получение данных</h1>
      <p className="component__content">
        {data && JSON.stringify(data)}
      </p>
    </div>
  )
} 