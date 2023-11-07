package com.dallim;


import android.util.Log;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class CalendarWidgetModulePackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        Log.d("DDDDDDDDDD", "WidgetModulePackage - createNativeModules CalendarWidgetModulePackage");
        return Arrays.<NativeModule>asList(new CalendarWidgetModule(reactContext));
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        Log.d("DDDDDDDDDD", "WidgetModulePackage - createViewManagers CalendarWidgetModulePackage");
        return Collections.emptyList();
    }
}