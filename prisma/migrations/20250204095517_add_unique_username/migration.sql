-- CreateTable
CREATE TABLE `users` (
    `u_id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `image` VARCHAR(255) NOT NULL DEFAULT 'avatar.png',
    `status` ENUM('superadmin', 'admin', 'employee', 'customer') NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `update_at` DATETIME(0) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    PRIMARY KEY (`u_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `calendar` (
    `table_id` INTEGER NOT NULL AUTO_INCREMENT,
    `queue_id` INTEGER NOT NULL,
    `date` DATE NOT NULL,

    INDEX `foreign key queue`(`queue_id`),
    PRIMARY KEY (`table_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment` (
    `comment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `comment` VARCHAR(255) NOT NULL,
    `response` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,

    PRIMARY KEY (`comment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer` (
    `customer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `surname` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(100) NOT NULL,
    `age` DATE NOT NULL,

    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `emp_id` INTEGER NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(100) NULL,
    `lname` VARCHAR(100) NULL,
    `tel` VARCHAR(15) NULL,
    `email` VARCHAR(100) NULL,
    `bdate` DATE NULL,
    `age` INTEGER NULL,
    `address` TEXT NULL,

    PRIMARY KEY (`emp_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees_position` (
    `emp_id` INTEGER NOT NULL,
    `position_id` INTEGER NOT NULL,

    INDEX `position_id`(`position_id`),
    PRIMARY KEY (`emp_id`, `position_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estimate` (
    `estimate_id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NOT NULL,
    `file` VARCHAR(255) NOT NULL,
    `detail` VARCHAR(255) NOT NULL,
    `response` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `status` ENUM('Not_responded', 'Responded') NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,

    INDEX `foreign key customer`(`customer_id`),
    PRIMARY KEY (`estimate_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `finance` (
    `finance_id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `list` VARCHAR(255) NOT NULL,
    `income` DECIMAL(10, 2) NOT NULL,
    `expense` DECIMAL(10, 2) NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `note` TEXT NOT NULL,

    PRIMARY KEY (`finance_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `position_type` (
    `position_id` INTEGER NOT NULL AUTO_INCREMENT,
    `position_name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`position_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `promotion` (
    `promotion_id` INTEGER NOT NULL AUTO_INCREMENT,
    `promotion_name` VARCHAR(255) NOT NULL,
    `detail` TEXT NOT NULL,
    `date_start` DATE NOT NULL,
    `date_end` DATE NOT NULL,

    PRIMARY KEY (`promotion_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `queue` (
    `queue_id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NOT NULL,
    `emp_id` INTEGER NOT NULL,
    `service_id` INTEGER NOT NULL,
    `service_type_id` INTEGER NOT NULL,
    `queue_date` DATE NOT NULL,
    `queue_time` TIME(0) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `slip` VARCHAR(255) NOT NULL,
    `create_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` ENUM('Pending', 'Confirmed', 'Cancelled', 'Completed', 'No-Show') NOT NULL,

    INDEX `foreign key customer_id`(`customer_id`),
    INDEX `foreign key emp_id`(`emp_id`),
    INDEX `foreign key service_id`(`service_id`),
    INDEX `foreign key service_type_id`(`service_type_id`),
    PRIMARY KEY (`queue_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service` (
    `service_id` INTEGER NOT NULL AUTO_INCREMENT,
    `service_name` VARCHAR(100) NOT NULL,
    `service_type_id` INTEGER NOT NULL,
    `service_price` INTEGER NOT NULL,
    `service_time` INTEGER NOT NULL,
    `service_detail` TEXT NOT NULL,
    `service_image` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`service_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_type` (
    `service_type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `service_type_name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`service_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock` (
    `stock_id` INTEGER NOT NULL AUTO_INCREMENT,
    `stock_name` VARCHAR(100) NOT NULL,
    `service_type_id` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `image` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`stock_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `calendar` ADD CONSTRAINT `foreign key queue` FOREIGN KEY (`queue_id`) REFERENCES `queue`(`queue_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_position` ADD CONSTRAINT `employees_position_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employees`(`emp_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `employees_position` ADD CONSTRAINT `employees_position_ibfk_2` FOREIGN KEY (`position_id`) REFERENCES `position_type`(`position_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `estimate` ADD CONSTRAINT `foreign key customer` FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `queue` ADD CONSTRAINT `foreign key customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `queue` ADD CONSTRAINT `foreign key emp_id` FOREIGN KEY (`emp_id`) REFERENCES `employees`(`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `queue` ADD CONSTRAINT `foreign key service_id` FOREIGN KEY (`service_id`) REFERENCES `service`(`service_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `queue` ADD CONSTRAINT `foreign key service_type_id` FOREIGN KEY (`service_type_id`) REFERENCES `service_type`(`service_type_id`) ON DELETE CASCADE ON UPDATE CASCADE;
