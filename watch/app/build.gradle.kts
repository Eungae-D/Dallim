plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.runapp"
    compileSdk = 34

    buildFeatures{
        viewBinding = true
        dataBinding = true
    }

    defaultConfig {
        applicationId = "com.runapp"
        minSdk = 30
        targetSdk = 33
        versionCode = 1
        versionName = "1.0"
        vectorDrawables {
            useSupportLibrary = true
        }

    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
    buildFeatures {
        compose = true
    }
    composeOptions {
        kotlinCompilerExtensionVersion = "1.4.3"
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
}

dependencies {


    // android
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.5.1")
    implementation("androidx.fragment:fragment:1.4.0")
    implementation("androidx.preference:preference-ktx:1.2.1")
    // wear-os
    implementation("androidx.wear:wear:1.3.0")
    implementation("com.google.android.gms:play-services-wearable:18.1.0")
    implementation("androidx.percentlayout:percentlayout:1.0.0")
    implementation("androidx.legacy:legacy-support-v4:1.0.0")
    implementation("androidx.recyclerview:recyclerview:1.3.1")
    // compose
    implementation("androidx.compose:compose-bom:2023.01.00")
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-tooling:1.5.3")
    implementation("androidx.wear.compose:compose-material:1.2.0")
    implementation("androidx.wear.compose:compose-foundation:1.2.0")
    implementation("androidx.wear.compose:compose-navigation:1.2.0")
    implementation("androidx.activity:activity-compose:1.5.1")
    // viewPager-watch(jetpack compose쓰면 이거 사용)
//    implementation("com.google.accompanist:accompanist-pager:0.20.1")
//    implementation("com.google.accompanist:accompanist-pager-indicators:0.20.1")
    // viewPager2
    implementation("androidx.viewpager2:viewpager2:1.0.0")

    // 사용자의 건강 정보에 접근하게 해주는 API
    implementation("androidx.health.connect:connect-client:1.0.0-alpha11")
    implementation("androidx.health:health-services-client:1.0.0-rc01")
    // 진행중인 사항을 사용자에게 보여줌
    implementation("androidx.wear:wear-ongoing:1.0.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.10.0")
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")
    implementation("com.google.android.gms:play-services-location:21.0.1")

    // 이미지 라이브러리
    implementation("com.github.bumptech.glide:glide:4.12.0")
    annotationProcessor("com.github.bumptech.glide:compiler:4.12.0")
    // 원형 이미지뷰 라이브러리
    implementation("de.hdodenhof:circleimageview:3.1.0")

    // room
    implementation("androidx.room:room-runtime:2.5.0")
    annotationProcessor("androidx.room:room-compiler:2.5.0")

    implementation ("androidx.lifecycle:lifecycle-viewmodel:2.4.0") // ViewModel 의존성
    implementation ("androidx.lifecycle:lifecycle-livedata:2.4.0") // LiveData 의존성
    implementation ("androidx.lifecycle:lifecycle-runtime:2.4.0") // Lifecycle-runtime 의존성


}