FROM openjdk:17-slim

# Install basic dependencies
RUN apt-get update && apt-get install -y \
    curl git unzip zip wget build-essential \
    lib32stdc++6 lib32z1 \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 18 and npm 8
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@8

# Set Android SDK environment variables
ENV ANDROID_SDK_ROOT=/opt/android-sdk
ENV PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools

# Install Android command line tools
RUN mkdir -p $ANDROID_SDK_ROOT/cmdline-tools && \
    cd $ANDROID_SDK_ROOT/cmdline-tools && \
    wget https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip -O tools.zip && \
    unzip tools.zip && \
    rm tools.zip && \
    mv cmdline-tools latest

# Accept licenses and install SDK components
RUN yes | sdkmanager --sdk_root=${ANDROID_SDK_ROOT} --licenses && \
    sdkmanager --sdk_root=${ANDROID_SDK_ROOT} \
        "platform-tools" \
        "platforms;android-33" \
        "build-tools;33.0.2"

# Setup project
WORKDIR /workspace
COPY . .

# Install node dependencies
RUN npm install --legacy-peer-deps --unsafe-perm

# Optional: Build APK
#RUN /android/gradlew -p android clean assembleRelease

CMD ["sh"]
