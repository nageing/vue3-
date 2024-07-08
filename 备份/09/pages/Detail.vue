<template>
    <div class="news-detail">
        <div class="detail-header">
            <span class="number">编号：{{ id }}</span>
            <span class="title">标题：{{ title }}</span>
        </div>
        <div class="detail-content">
            内容：{{ content }}
        </div>
    </div>
</template>
<script lang='ts' setup name='Detail'>
defineProps(['id', 'title', 'content'])
</script>

<style lang="scss" scoped>
.news-detail {
    // 这里可以根据需要添加一些整体样式，比如内边距、边框等  
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
}

.detail-header {
    display: flex;
    justify-content: space-between; // 使编号和标题之间有间隔  
    align-items: center; // 垂直居中  
    margin-bottom: 10px; // 与内容部分之间的间隔  
}

.detail-header .number,
.detail-header .title {
    // 可以为编号和标题添加一些样式，如字体大小、颜色等  
    font-size: 16px;
}

.detail-header .title {
    font-weight: bold; // 标题加粗  
}

.detail-content {
    // 内容部分的样式  
    // 这里可以根据需要添加更多样式，如字体大小、颜色、行高等  
    font-size: 14px;
    line-height: 1.6;
    color: #333;
}
</style>
