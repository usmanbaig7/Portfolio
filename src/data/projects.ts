export const categories = ["All", "Applications", "UI/UX"] as const;
export type Category = (typeof categories)[number];

export type KeyPoint = {
  label: string;
  detail: string;
};

export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  gradient: string;
  initials: string;
  description?: string;
  fullDescription?: string;
  keyPoints?: KeyPoint[];
  techStack?: string[];
};

export const projects: Project[] = [
  {
    id: "lincsell-pos",
    title: "Lincsell POS",
    category: "Applications",
    gradient: "from-amber-500 to-rose-500",
    initials: "LW",
    description: "A comprehensive Point of Sale system tailored for modern retail.",
    fullDescription:
      "Lincsell POS is a modern point-of-sale solution built to help small and medium-sized businesses manage their daily sales operations efficiently. It provides a seamless checkout experience while handling inventory, payments, and transaction tracking in a single platform. The app is designed with performance, scalability, and ease of use in mind, making it suitable for real-world retail environments.",
    keyPoints: [
      {
        label: "State Management",
        detail:
          "Implemented using Provider for efficient and scalable state handling across the app.",
      },
      {
        label: "API Integration",
        detail:
          "Integrated REST APIs to manage dynamic data such as products, sales, and user information.",
      },
      {
        label: "Third-Party Integrations",
        detail:
          "Connected external SDKs including Stripe for secure payments and printing services for receipts.",
      },
      {
        label: "Clean Architecture",
        detail:
          "Structured the project using clean architecture principles to ensure maintainability, scalability, and separation of concerns.",
      },
      {
        label: "Backend Integration",
        detail:
          "Developed and integrated Azure APIs to securely fetch and manage data from the server.",
      },
    ],
    techStack: ["Flutter", "Dart", "Azure", "Stripe", "Hive"],
  },
  {
    id: "lincsell-pos-lite",
    title: "Lincsell POS Lite",
    category: "Applications",
    gradient: "from-sky-500 to-indigo-600",
    initials: "NM",
    description: "A streamlined version of our Point of Sale system for small businesses.",
    fullDescription:
      "Lincsell POS Lite is a lightweight and flexible point-of-sale solution designed for business owners who need to manage sales beyond a fixed location. It enables seamless transactions on the go, making it ideal for small businesses, mobile vendors, and startups. With a simplified feature set, the app focuses on speed, usability, and accessibility while maintaining reliable performance.",
    keyPoints: [
      {
        label: "State Management",
        detail:
          "Utilized Provider for efficient and responsive state handling across the application.",
      },
      {
        label: "API Integration",
        detail:
          "Connected REST APIs to manage core functionalities such as sales and basic product data.",
      },
      {
        label: "Third-Party Integrations",
        detail:
          "Integrated essential SDKs including Stripe for secure payment processing.",
      },
      {
        label: "Clean Architecture",
        detail:
          "Followed clean architecture principles to keep the codebase modular and easy to maintain.",
      },
      {
        label: "Backend Integration",
        detail:
          "Implemented Azure APIs for secure and scalable data communication with the server.",
      },
    ],
    techStack: ["Flutter", "Dart", "Hive", "Stripe", "Firebase", "Azure"],
  },
  {
    id: "family-thrift-center",
    title: "Family Thrift Center",
    category: "Applications",
    gradient: "from-orange-500 to-red-600",
    initials: "BR",
    description: "An application to manage inventory and sales for the Family Thrift Center.",
    fullDescription:
      "The Family Thrift Center app is designed to enhance the shopping experience by helping users discover nearby stores and explore ongoing offers with ease. It provides a seamless way to stay connected with local businesses while benefiting from exclusive deals. With an integrated loyalty system, users can earn reward points on purchases and redeem them for future benefits, encouraging long-term engagement.",
    keyPoints: [
      {
        label: "State Management",
        detail: "Implemented using Provider for smooth and efficient UI updates.",
      },
      {
        label: "API Integration",
        detail:
          "Integrated REST APIs to fetch store data, offers, and user-related information dynamically.",
      },
      {
        label: "Map & Location Services",
        detail:
          "Integrated map services to display nearby stores and enable users to view locations visually on the map.",
      },
      {
        label: "Loyalty System",
        detail: "Developed a reward points mechanism to track and redeem customer benefits.",
      },
      {
        label: "Clean Architecture",
        detail: "Structured the app with clean architecture for scalability and maintainability.",
      },
      {
        label: "Backend Integration",
        detail: "Connected with Azure APIs to securely manage user data and transactions.",
      },
    ],
    techStack: ["Flutter", "Dart", "Azure", "Provider", "Hive", "Google Maps API"],
  },
  {
    id: "managers-app",
    title: "Managers App",
    category: "Applications",
    gradient: "from-emerald-500 to-teal-600",
    initials: "PF",
    description: "An internal tool for managers to oversee operations and team performance.",
    fullDescription:
      "The Managers App for Family Thrift Store is designed to make receipt management more accurate, organized, and fully digital. It allows managers to capture receipt images and upload them directly to the server for secure backup. The app also ensures better document quality by using a built-in scanning system that guides users to properly align receipts within a defined boundary before capturing the image. This helps avoid unclear or improperly taken photos. In addition, managers can easily view, manage, and access all uploaded receipts anytime, improving record keeping and operational efficiency.",
    keyPoints: [
      {
        label: "State Management",
        detail:
          "Implemented using Provider for smooth and responsive UI updates across camera, scanning, upload, and receipt viewing modules.",
      },
      {
        label: "API Integration",
        detail:
          "Integrated REST APIs to upload receipt images, fetch stored documents, and manage categorized receipt data.",
      },
      {
        label: "Camera Integration",
        detail:
          "Enabled direct receipt capture using the device camera for quick and easy digital submission.",
      },
      {
        label: "Guided Scanning System",
        detail:
          "Implemented a boundary-based scanner that only allows image capture when the receipt is properly aligned within the frame, ensuring high-quality uploads.",
      },
      {
        label: "Cloud Storage",
        detail:
          "All receipts are securely uploaded and stored on the server for backup and long-term access.",
      },
      {
        label: "Receipt Management Module",
        detail:
          "Provides functionality to view, search, and organize all uploaded receipts in a structured system.",
      },
      {
        label: "Clean Architecture",
        detail:
          "Built with scalable clean architecture to ensure maintainability and future feature expansion.",
      },
      {
        label: "Backend Integration",
        detail:
          "Connected with secure Azure-based APIs for reliable data handling and centralized storage.",
      },
    ],
    techStack: ["Flutter", "Dart", "Hive", "Azure"],
  },
];
