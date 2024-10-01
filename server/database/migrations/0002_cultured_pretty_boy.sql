CREATE TABLE `projects` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`developer_name` text NOT NULL,
	`mrr` text NOT NULL,
	`frontend` text,
	`backend` text,
	`deployment_provider` text,
	`database` text,
	`orm` text,
	`payment_provider` text NOT NULL
);
