<template>
    <ion-card class="card">
        <div class="row-1">
            <img :src="job.jobIconUrl" />
            
            <div class="empName-jobDesc">
                <div class="job-title">{{job.jobTitle}}</div>
                <div class="emp-name">{{job.employerName}}</div>
            </div>
            
            <div class="pipe">|</div>
            
            <div class="rating">
                3.8
            </div>
        </div>
        <div class="row-2">
            <div class="job-dates">
                <div class="row2Label">Duration</div>
                <div class="row2Item">
                    {{ job.jobStartDate.toLocaleDateString() }} - {{ job.jobEndDate.toLocaleDateString() }}
                </div>
            </div>
            <div class="job-pay">
                <div class="row2Label">Pay</div>
                <div class="row2Item">${{ job.jobPayRateHourly }}/hr</div>
            </div>
            <div class="job-distance">
                <div class="row2Label">Distance</div>
                <div class="row2Item">15 mi</div>
            </div>

        </div>
        <div class="row-3">

        </div>

        <!-- <div class="card-details">
            <ion-card-header>
                <ion-card-title>{{job.jobTitle}}</ion-card-title>
                <ion-card-subtitle>{{job.employerName}}</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                {{job.jobDescription}}
            </ion-card-content>
        </div> -->
    </ion-card>
</template>

<script src="./jobCard.ts" lang="ts" />
<style src="./jobCard.scss" lang="scss" />