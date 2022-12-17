import { Tool, ToolCard } from "./tool";

export const ToolList = ({ items }: { items: Tool[] }) => {
  return (
    <div className="grid xl:grid-cols-3 xl:gap-4 xl:auto-rows-fr">
      {items.map((i) => {
        return (
          <ToolCard
            key={i.title}
            title={i.title}
            description={i?.description}
            tags={i?.tags}
            link={i?.link}
          />
        );
      })}
    </div>
  );
};
