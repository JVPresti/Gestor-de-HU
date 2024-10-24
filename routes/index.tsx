import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Prueba boostrap
        </button>
        <ul class="dropdown-menu">
          <li>
            <button class="dropdown-item" type="button">Dropdown item</button>
          </li>
          <li>
            <button class="dropdown-item" type="button">Dropdown item</button>
          </li>
          <li>
            <button class="dropdown-item" type="button">Dropdown item</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
