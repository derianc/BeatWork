<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <ion-page>
        <ion-content class="card-container">
            <jobCard v-for="(job, index) in jobs" :key="index" :job="job" />
        </ion-content>
    </ion-page>
</template>

<script src="./feed.ts" lang="ts" />
<style src="./feed.scss" lang="scss" />