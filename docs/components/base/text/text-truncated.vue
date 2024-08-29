<template>
    <LiRow direction="row">
        <LiCol>
            <LiText class="w-3" truncated>我是一段很长很长的文本，但是它会被截断</LiText>
        </LiCol>
        <LiCol>
            <LiText class="w-2" :truncated="2">我是一段很长很长的文本<br />但是它会被截断</LiText>
        </LiCol>
    </LiRow>
</template>