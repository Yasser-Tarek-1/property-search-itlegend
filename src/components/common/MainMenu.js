import {
  homeItems,
  blogItems,
  listingItems,
  propertyItems,
  pageItems,
} from "@/data/navItems";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const local = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    //  "list-item"
    // className={topMenu == "home" ? "title menuActive" : "title"}
    // className={`${handleActive(item.href)}`} href={item.href}
    <ul className="ace-responsive-menu">
      <li className={isActive(`/${local}`) ? "active" : ""}>
        <Link href="/">{t("home")}</Link>
      </li>
      <li className={isActive(`/${local}/search`) ? "active" : ""}>
        <Link href={`/${local}/search`}>{t("search")}</Link>
      </li>
      <li className={isActive(`/${local}/blog`) ? "active" : ""}>
        <Link href={`/${local}/blog`}>{t("blog")}</Link>
      </li>
      <li className={isActive(`/${local}/about`) ? "active" : ""}>
        <Link href={`/${local}/about`}>{t("about")}</Link>
      </li>
      <li className={isActive(`/${local}/contact`) ? "active" : ""}>
        <Link href={`/${local}/contact`}>{t("contact")}</Link>
      </li>

      {/* <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Home
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {homeItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="megamenu_style dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "listing" ? "title menuActive" : "title"}>
            Listing
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="row dropdown-megamenu sub-menu">
          {listingItems.map((item, index) => (
            <li className="col mega_menu_list" key={index}>
              <h4 className="title">{item.title}</h4>
              <ul className="sub-menu">
                {item.submenu.map((submenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      className={`${handleActive(submenuItem.href)}`}
                      href={submenuItem.href}
                    >
                      {submenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span
            className={topMenu == "property" ? "title menuActive" : "title"}
          >
            Property
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {propertyItems.map((item, index) => (
            <li key={index} className="dropitem">
              <a href="#">
                <span
                  className={
                    submenu == item.label ? "title menuActive" : "title"
                  }
                >
                  {item.label}
                </span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                {item.subMenuItems.map((subMenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      className={`${handleActive(subMenuItem.href)}`}
                      href={subMenuItem.href}
                    >
                      {subMenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "blog" ? "title menuActive" : "title"}>
            Blog
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {blogItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "pages" ? "title menuActive" : "title"}>
            Pages
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {pageItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
    </ul>
  );
};

export default MainMenu;
