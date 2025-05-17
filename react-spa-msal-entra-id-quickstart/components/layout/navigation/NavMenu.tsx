import {
  Toolbar,
  ToolbarGroup,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Divider,
  Body1Strong,
} from "@fluentui/react-components";
import { navConfig } from "./NavConfig";
import { NavButton } from "./NavButton";


export default function NavMenu() {
  return (
    <Toolbar aria-label="Navigation Menu">
      <ToolbarGroup role="presentation" style={{ width: "100%" }}>
        {navConfig.map((item, index) => {
          if (item.children && item.children.length > 0) {
            return (
              <Accordion key={index} defaultOpenItems="1">
                <AccordionItem value="1">
                  <AccordionHeader
                    icon={{
                      as: "div",
                      children: item.icon,
                    }}
                    expandIconPosition="end"
                  >
                    <Body1Strong>{item.label}</Body1Strong>
                  </AccordionHeader>
                  <AccordionPanel>
                    {item.children.map((child, childIndex) => (
                      <NavButton
                        key={childIndex}
                        label={child.label}
                        route={child.route}
                        showActiveIcon={child.showActiveIcon}
                      />
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            );
          }

          return (
            <div key={index}>
              <NavButton
                label={item.label}
                route={item.route}
                icon={item.icon}
                showActiveIcon={item.showActiveIcon}
              />
              {index < navConfig.length - 1 && <Divider />}
            </div>
          );
        })}
      </ToolbarGroup>
    </Toolbar>
  );
}