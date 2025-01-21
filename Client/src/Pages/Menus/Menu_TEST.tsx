export const searchbarMenuItems = [
  {
    label: "Item 1",
    onClick: () => "Item 1 selected",
  },
  {
    label: "Item 2",
    subItems: [
      {
        label: "Sub Item 1",
        onClick: () => "Sub Item 1 selected",
      },
      {
        label: "Sub Item 2",
        onClick: () => "Sub Item 2 selected",
      },
    ],
  },
  {
    label: "Item 3",
    onClick: () => "Item 3 selected",
  },
];
