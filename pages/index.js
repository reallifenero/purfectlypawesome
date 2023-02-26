/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  return (
    <div>
      <nav>
        <figure className="nav__logo">
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Paw-print.svg/1200px-Paw-print.svg.png"
              alt=""
            />
          </span>
          <Link href="/">
            Purrfectly <br />
            Pawesome
          </Link>
        </figure>
        <ul className="nav__links">
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/timer">Timer</Link>
          </li>
          <li className="login">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <section class="home__container">
        <div class="home__banner">
          <div class="home__banner__title">
            <h1>
              The App for Humans and
              <span>Cats</span>
            </h1>
          </div>
          <div>
            <img
              src="https://png.pngtree.com/png-vector/20220615/ourmid/pngtree-victor-art-png-image_5047823.png"
              alt=""
            />
          </div>
        </div>
        <div class="home__button">
          <a href="/timer">Enter App</a>
        </div>
      </section>
    </div>
  );
}
