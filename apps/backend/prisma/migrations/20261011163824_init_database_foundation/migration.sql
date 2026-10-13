-- CreateTable
CREATE TABLE "database_health_checks" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'connected',
    "checked_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "database_health_checks_pkey" PRIMARY KEY ("id")
);
