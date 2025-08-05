# Dockerfile

FROM swmansion/react-native-android:latest

WORKDIR /workspace

# Copy project files
COPY . .

# Set appropriate user (fixes permission issues inside Jenkins container)
ARG LOCAL_USER_ID
USER ${LOCAL_USER_ID:-1000}

# Install dependencies using NPM
RUN npm install

# Clean & build the Android release APK

RUN cd android && ./gradlew clean assembleRelease