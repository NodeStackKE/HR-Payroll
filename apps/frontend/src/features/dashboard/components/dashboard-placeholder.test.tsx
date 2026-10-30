
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DashboardPlaceholder } from "./dashboard-placeholder";

describe("DashboardPlaceholder", () => {
  it("renders the main Dashboard heading", () => {
    render(<DashboardPlaceholder />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Dashboard",
      }),
    ).toBeInTheDocument();
  });

  it("renders all four summary cards", () => {
    render(<DashboardPlaceholder />);

    expect(screen.getByText("Employees")).toBeInTheDocument();
    expect(screen.getByText("Attendance")).toBeInTheDocument();
    expect(screen.getByText("Payroll")).toBeInTheDocument();
    expect(screen.getByText("Leave Requests")).toBeInTheDocument();
  });

  it("renders the dashboard workspace placeholder", () => {
    render(<DashboardPlaceholder />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Your dashboard workspace",
      }),
    ).toBeInTheDocument();
  });
});
