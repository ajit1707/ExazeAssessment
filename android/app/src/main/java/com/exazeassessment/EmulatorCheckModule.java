package com.exazeassessment;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.os.Build;
import android.widget.Toast;

import java.util.HashMap;
import java.util.Map;

public class EmulatorCheckModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";
    //constructor
    public EmulatorCheckModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "EmulatorCheckModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    //Custom function that we are going to export to JS
    @ReactMethod
    public void showEmulatorToast(String message) {
        isAndroidEmulator(message);
    }


    public boolean isAndroidEmulator(String message) {
        String model = Build.MODEL;
        String product = Build.PRODUCT;

        boolean isEmulator = false;
        if (product != null) {
            isEmulator = product.equals("emulator");
            Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show(); 
        }
        return isEmulator;
    }
}