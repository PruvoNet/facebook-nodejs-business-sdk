/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import InsightsResult from './insights-result';
import VideoStats from './video-stats';
import AdVideo from './ad-video';

/**
 * VideoAsset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoAsset extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      broadcast_id: 'broadcast_id',
      broadcast_planned_start_time: 'broadcast_planned_start_time',
      can_viewer_edit: 'can_viewer_edit',
      created_time: 'created_time',
      creator: 'creator',
      description: 'description',
      download_hd_url: 'download_hd_url',
      download_sd_url: 'download_sd_url',
      embeddable: 'embeddable',
      expiration: 'expiration',
      feed_type: 'feed_type',
      id: 'id',
      is_crossposting_eligible: 'is_crossposting_eligible',
      is_crossposting_within_bm_eligible: 'is_crossposting_within_bm_eligible',
      is_crossposting_within_bm_enabled: 'is_crossposting_within_bm_enabled',
      is_episode: 'is_episode',
      is_featured: 'is_featured',
      is_live_premiere: 'is_live_premiere',
      is_video_asset: 'is_video_asset',
      last_added_time: 'last_added_time',
      latest_creator: 'latest_creator',
      latest_owned_description: 'latest_owned_description',
      latest_owned_title: 'latest_owned_title',
      length: 'length',
      live_status: 'live_status',
      no_story: 'no_story',
      owner_name: 'owner_name',
      owner_picture: 'owner_picture',
      owner_post_state: 'owner_post_state',
      permalink_url: 'permalink_url',
      picture: 'picture',
      posts_count: 'posts_count',
      posts_ids: 'posts_ids',
      posts_status: 'posts_status',
      published: 'published',
      scheduled_publish_time: 'scheduled_publish_time',
      secret: 'secret',
      secure_stream_url: 'secure_stream_url',
      social_actions: 'social_actions',
      status: 'status',
      stream_url: 'stream_url',
      thumbnail_while_encoding: 'thumbnail_while_encoding',
      title: 'title',
      views: 'views'
    });
  }

  getInsights (fields, params, fetchFirstPage = true): InsightsResult {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getVideoStats (fields, params, fetchFirstPage = true): VideoStats {
    return this.getEdge(
      VideoStats,
      fields,
      params,
      fetchFirstPage,
      '/video_stats'
    );
  }

  getVideos (fields, params, fetchFirstPage = true): AdVideo {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  get (fields, params): VideoAsset {
    return this.read(
      fields,
      params
    );
  }
}
