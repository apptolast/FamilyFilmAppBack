-- DropForeignKey
ALTER TABLE "GenreMovie" DROP CONSTRAINT "GenreMovie_genre_id_fkey";

-- DropForeignKey
ALTER TABLE "GenreMovie" DROP CONSTRAINT "GenreMovie_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "GroupUsers" DROP CONSTRAINT "GroupUsers_group_id_fkey";

-- DropForeignKey
ALTER TABLE "GroupUsers" DROP CONSTRAINT "GroupUsers_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ViewList" DROP CONSTRAINT "ViewList_group_id_fkey";

-- DropForeignKey
ALTER TABLE "ViewList" DROP CONSTRAINT "ViewList_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "WatchList" DROP CONSTRAINT "WatchList_group_id_fkey";

-- DropForeignKey
ALTER TABLE "WatchList" DROP CONSTRAINT "WatchList_movie_id_fkey";

-- AddForeignKey
ALTER TABLE "GroupUsers" ADD CONSTRAINT "GroupUsers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupUsers" ADD CONSTRAINT "GroupUsers_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchList" ADD CONSTRAINT "WatchList_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchList" ADD CONSTRAINT "WatchList_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewList" ADD CONSTRAINT "ViewList_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewList" ADD CONSTRAINT "ViewList_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenreMovie" ADD CONSTRAINT "GenreMovie_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenreMovie" ADD CONSTRAINT "GenreMovie_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
