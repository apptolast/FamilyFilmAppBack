-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "username" TEXT,
    "avatar" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "adult" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "backdrop_path" TEXT,
    "budget" DOUBLE PRECISION,
    "belongs_to_collection" JSONB,
    "genres" JSONB,
    "production_companies" JSONB,
    "production_countries" JSONB,
    "spoken_languages" JSONB,
    "genre_ids" INTEGER[],
    "original_language" TEXT NOT NULL,
    "original_title" TEXT,
    "overview" TEXT,
    "homepage" TEXT,
    "imdb_id" TEXT,
    "popularity" DOUBLE PRECISION,
    "revenue" DOUBLE PRECISION,
    "runtime" INTEGER,
    "poster_path" TEXT,
    "status" TEXT,
    "tagline" TEXT,
    "release_date" TEXT,
    "video" BOOLEAN NOT NULL DEFAULT false,
    "vote_average" DOUBLE PRECISION NOT NULL,
    "vote_count" INTEGER,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
