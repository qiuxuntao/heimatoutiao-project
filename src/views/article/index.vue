<template>
  <div class="article-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
      title="兴趣商城"
    ></van-nav-bar>
    <!-- /导航栏 -->

    <div class="main-wrap">
      <!-- 加载中 -->
      <div v-if="loading" class="loading-wrap">
        <van-loading color="#3296fa" vertical>加载中</van-loading>
      </div>
      <!-- /加载中 -->

      <!-- 加载完成-文章详情 -->
      <div v-else-if="article.title" class="article-detail">
        <!-- 文章标题 -->
        <h1 class="article-title">{{ article.title }}</h1>
        <!-- /文章标题 -->

        <!-- 用户信息 -->
        <van-cell class="user-info" center :border="false">
          <van-image
            class="avatar"
            slot="icon"
            round
            fit="cover"
            :src="article.aut_photo"
          />
          <div slot="title" class="user-name">{{ article.aut_name }}</div>
          <div slot="label" class="publish-date">
            {{ article.pubdate | relativeTime }}
          </div>
          <van-button
            v-if="article.is_followed"
            class="follow-btn"
            round
            size="small"
            @click="onFollow"
            >已关注</van-button
          >

          <van-button
            v-else
            class="follow-btn"
            type="info"
            color="#3296fa"
            round
            size="small"
            icon="plus"
            @click="onFollow"
            >关注</van-button
          >
        </van-cell>
        <!-- /用户信息 -->

        <!-- 文章内容 -->
        <div
          class="article-content markdown-body"
          v-html="article.content"
        ></div>
        <van-divider>正文结束</van-divider>
        <CommentList
          :source="article.art_id"
          @onload-success="totalCommentCount = $event.total_count"
        ></CommentList>
      </div>
      <!-- /加载完成-文章详情 -->

      <!-- 加载失败：404 -->
      <div v-else-if="errStatus === 404" class="error-wrap">
        <van-icon name="failure" />
        <p class="text">该资源不存在或已删除！</p>
      </div>
      <!-- /加载失败：404 -->

      <!-- 加载失败：其它未知错误（例如网络原因或服务端异常） -->
      <div v-else class="error-wrap">
        <van-icon name="failure" />
        <p class="text">内容加载失败！</p>
        <van-button @click="loadArticle" class="retry-btn">点击重试</van-button>
      </div>
      <!-- /加载失败：其它未知错误（例如网络原因或服务端异常） -->
    </div>

    <!-- 底部区域 -->
    <div class="article-bottom">
      <van-button
        class="comment-btn"
        type="default"
        round
        size="small"
        @click="isPostShow = true"
        >写评论</van-button
      >
      <van-icon name="comment-o" :info="totalCommentCount" color="#777" />
      <!-- <van-icon color="#777" name="star-o" /> -->
      <CollectArticle
        class="btn-item"
        v-model="article.is_collected"
        :article-id="article.art_id"
      ></CollectArticle>
      <!-- <van-icon color="#777" name="good-job-o" /> -->
      <LikeArticle
        v-model="article.attitude"
        :article-id="article.art_id"
      ></LikeArticle>
      <van-icon name="share" color="#777777"></van-icon>
    </div>
    <!-- /底部区域 -->

    <!-- 发布评论 -->
    <van-popup v-model="isPostShow" position="bottom">
      <CommentPost></CommentPost>
    </van-popup>
    <!-- 发布评论 -->
  </div>
</template>

<script>
import { getArticleById } from '@/api/article.js'
import { Toast } from 'vant'
import { addFollow, deleteFollow } from '@/api/user.js'
import CollectArticle from '@/components/collect-article/index.vue'
import LikeArticle from '@/components/like-article/index.vue'
import CommentList from '@/views/article/commpoents/comment-list.vue'
import CommentPost from '@/views/article/commpoents/comment-post.vue'
// ImagePreview
// ImagePreview({
//   images: [
//     'https://img01.yzcdn.cn/vant/apple-1.jpg',
//     'https://img01.yzcdn.cn/vant/apple-2.jpg'
//   ],
//   startPosition: 1,
//   onClose(){

//   }
// })
export default {
  name: 'ArticleIndex',
  components: { CollectArticle, LikeArticle, CommentList, CommentPost },
  props: {
    articleId: {
      type: [Number, String, Object],
      required: true
    }
  },
  data () {
    return {
      article: [], // 文章详情
      loading: true, // 加载中的loading姿态
      errStatus: 0,
      totalCommentCount: 0,
      isPostShow: false
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadArticle()
  },
  mounted () {},
  methods: {
    onClickLeft () {
      this.$router.back()
    },

    async loadArticle () {
      this.loading = true
      try {
        const { data } = await getArticleById(this.articleId)

        // if (Math.random() > 0.5) {
        //   JSON.parse('efrwfwfewfwwfwfwfwfwfewfwfwfwfwfw')
        // }
        console.log('111111', data)
        this.article = data.data
        this.loading = false
        Toast('获取数据成功')
      } catch (err) {
        if (err.response && err.response.satus === 404) {
          this.errStatus = 404
        }
        Toast('获取数据失败')
        this.loading = false
      }
    },
    // 点击添加关注和取消关注
    async onFollow () {
      try {
        if (this.article.is_followed) {
          // 已关注，取消关注
          const { data } = await deleteFollow(this.article.art_id)
          console.log(data)
          this.article.is_followed = false
          Toast('取消关注成功')
        } else {
          // 点击添加关注
          const { data } = await addFollow(this.article.aut_id.toString())
          console.log(data)
          Toast('关注成功')
          this.article.is_followed = true
        }
      } catch (err) {
        let message = '操作失败,请重试！'
        if (err.response && err.response.status === 400) {
          message = '你不能关注你自己'
        }
        Toast(message)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "./github-markdown.css";
.article-bottom {
  z-index: 2;
  height: 70px;
}
.article-container {
  .main-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 92px;
    bottom: 88px;
    overflow-y: scroll;
    background-color: #fff;
  }

  .article-detail {
    .article-title {
      font-size: 40px;
      padding: 50px 32px;
      margin: 0;
      color: #3a3a3a;
    }

    .user-info {
      padding: 0 32px;
      .avatar {
        width: 70px;
        height: 70px;
        margin-right: 17px;
      }
      .van-cell__label {
        margin-top: 0;
      }
      .user-name {
        font-size: 24px;
        color: #3a3a3a;
      }
      .publish-date {
        font-size: 23px;
        color: #b7b7b7;
      }
      .follow-btn {
        width: 170px;
        height: 58px;
      }
    }

    .article-content {
      padding: 55px 32px;
      /deep/ p {
        text-align: justify;
      }
    }
  }

  .loading-wrap {
    padding: 200px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  .error-wrap {
    padding: 200px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    /deep/.van-icon {
      font-size: 122px;
      color: #b4b4b4;
    }
    .text {
      font-size: 30px;
      color: #666666;
      margin: 33px 0 46px;
    }
    .retry-btn {
      width: 280px;
      height: 70px;
      line-height: 70px;
      border: 1px solid #c3c3c3;
      font-size: 30px;
      color: #666666;
    }
  }

  .article-bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    height: 88px;
    border-top: 1px solid #d8d8d8;
    background-color: #fff;
    .comment-btn {
      width: 282px;
      height: 46px;
      border: 2px solid #eeeeee;
      font-size: 30px;
      line-height: 46px;
      color: #a7a7a7;
    }
    .van-icon {
      font-size: 40px;
      .van-info {
        font-size: 16px;
        background-color: #e22829;
      }
    }
  }
}
</style>
