interface RepositoryItensProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItensProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target="_blank">
        Link do repositório
      </a>
    </li>
  );
}
