
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Wallet,
  ClipboardList,
  FileText,
  Settings,
} from "lucide-react";

export const appNavigation = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Employees", href: "/employees", icon: Users },
  { label: "Attendance", href: "/attendance", icon: CalendarDays },
  { label: "Payroll", href: "/payroll", icon: Wallet },
  { label: "Leave Management", href: "/leave", icon: ClipboardList },
  { label: "Reports", href: "/reports", icon: FileText },
  { label: "Settings", href: "/settings", icon: Settings },
];
