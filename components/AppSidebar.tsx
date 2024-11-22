import { Home, Inbox, Settings, Store, ShoppingCart, Package, Users, CircleUser, Tv, BookUser, LucideProps } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react"

interface Item {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

const mainItems : Item[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Following",
    url: "/following",
    icon: BookUser,
  },
  {
    title: "Live",
    url: "/live",
    icon: Tv,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: Inbox,
  },
]

const appItems = [
  {
    title: "Mall",
    url: "/mall",
    icon: Store,
  },
  {
    title: "Community",
    url: "/community",
    icon: Users,
  },
  {
    title: "Cart",
    url: "/cart",
    icon: ShoppingCart,
  },
  {
    title: "Order",
    url: "/order",
    icon: Package,
  },
]

const systemItems = [
  {
    title: "Profile",
    url: "/profile",
    icon: CircleUser,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

const SidebarGroupCustom : React.FC<{label? : String, items: Item[]}> = ({label, items}) => (
  <SidebarGroup>
    { label ? <SidebarGroupLabel>{label}</SidebarGroupLabel> : null}
    <SidebarGroupContent>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
)

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-white justify-between">
        <div className="overflow-auto">
          <SidebarGroupCustom label="Features" items={mainItems} />
          <SidebarGroupCustom label="Applications" items={appItems} />
        </div>
        <SidebarGroupCustom items={systemItems} />
      </SidebarContent>
    </Sidebar>
  )
}