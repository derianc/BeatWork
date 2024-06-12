<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Jobs Listings</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="card-container">
            <jobCard v-for="(job, index) in jobs" :key="index" :job="job" />
        </ion-content>
    </ion-page>
</template>

<script src="./feed.ts" lang="ts" />
<style src="./feed.scss" lang="scss" />