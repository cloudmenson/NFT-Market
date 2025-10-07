import {
  Button,
  LinkButton,
  filterCategory,
  filterCryptoCategory,
} from "@/shared";

export const FilterCategory = ({}) => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-[8px]">
        {filterCategory.map((filter) => (
          <>
            {filter.label === "More" ? (
              <Button type="secondary" label="More" />
            ) : (
              <LinkButton
                type="secondary"
                href={filter.href}
                Icon={filter.Icon}
                label={filter.label}
              />
            )}
          </>
        ))}
      </div>

      <div className="flex items-center gap-[8px]">
        {filterCryptoCategory.map((filter) => (
          <>
            {filter.type === "button" ? (
              <Button type="secondary" Icon={filter.Icon} />
            ) : (
              <LinkButton
                type="secondary"
                Icon={filter.Icon}
                href={filter?.href}
                label={filter.label}
              />
            )}
          </>
        ))}
      </div>
    </section>
  );
};
