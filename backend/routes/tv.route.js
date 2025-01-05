import express from "express"

import {
  getTrendingTVShows,
  getTVShowsTrailers,
  getTVShowsDetails,
  getSimilarTVShows,
  getTVShowsByCategory,
} from "../controller/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTVShows);
router.get('/:id/trailers', getTVShowsTrailers);
router.get('/:id/details', getTVShowsDetails);
router.get('/:id/similar', getSimilarTVShows);
router.get('/:cateogory', getTVShowsByCategory);



export default router;