import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const MenuWidget = () => {
  const locale = useLocale();
  const menuSections = [
    {
      title: "احدث المطورين",
      links: [
        { label: "مجموعة طلعت مصطفى القابضة", href: "/developer" },
        { label: "مصر إيطاليا للتطوير العقاري", href: "/developer" },
        { label: "اعمار مصر", href: "/developer" },
        { label: "سيراك للتطوير العقاري", href: "/developer" },
        { label: "مباني ادريس", href: "/developer" },
        { label: "بالم هيلز للتطوير العقاري", href: "/developer" },
      ],
    },
    {
      title: "الاكثر بحثا",
      links: [
        { label: "فيلا للبيع في بادية ٣ غرف", href: "/property" },
        { label: "فيلا للبيع في سراي ٤ غرف في القاهرة ", href: "/property" },
        { label: "شقة للبيع في ايسي ريزيدنس", href: "/property" },
        { label: "شركة الباتيو كازا - شق", href: "/property" },
        { label: "شقة للبيع في ايسي ريزيدنس غرفه", href: "/property" },
        { label: "شقة للبيع في الحي اللاتيني", href: "/property" },
      ],
    },
    {
      title: "مناطق تهمك",
      links: [
        { label: "الرحاب", href: "/area" },
        { label: "سولاري", href: "/area" },
        { label: "مدينتي", href: "/area" },
        { label: "هاسيندا ويست", href: "/area" },
        { label: "سول", href: "/area" },
        { label: "الورا", href: "/area" },
      ],
    },
    {
      title: "اخرى",
      links: [
        { label: "شقق 2 غرفة نوم للبيع فى زيد الشيخ", href: "/property" },
        { label: "شقق 2 غرفة نوم للبيع فى بادية ", href: "/property" },
        { label: "شقق 3 غرفة نوم للبيع فى البوسك", href: "/property" },
        { label: "هاسيندا ويست", href: "/property" },
        { label: "بينت هاوس 3 غرفة نوم للبيع فى بادية", href: "/property" },
        { label: "بينت هاوس 2 غرفة نوم للبيع", href: "/property" },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb15">{section.title}</h6>
            <ul className="p-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={`/${locale}${link.href}/${link.label}`}
                    className="ellipsis"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
