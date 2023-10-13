import cv2
import requests
import numpy as np

def download_image(url):
    response = requests.get(url)
    img = cv2.imdecode(np.frombuffer(response.content, np.uint8), cv2.IMREAD_COLOR)
    return img

def resize_image(img, target_size=(256, 256)):
    return cv2.resize(img, target_size)

def calculate_bhattacharyya_distance(hist1, hist2):
    return cv2.compareHist(hist1, hist2, cv2.HISTCMP_BHATTACHARYYA)

def calculate_histogram(image):
    hist = cv2.calcHist([image], [0, 1, 2], None, [8, 8, 8], [0, 256, 0, 256, 0, 256])
    hist = cv2.normalize(hist, hist).flatten()
    return hist

def image_similarity_histogram(url1, url2):
    # Download and resize images from URLs
    img1 = resize_image(download_image(url1))
    img2 = resize_image(download_image(url2))

    # Calculate histograms
    hist1 = calculate_histogram(img1)
    hist2 = calculate_histogram(img2)

    # Calculate Bhattacharyya distance
    bhattacharyya_distance = calculate_bhattacharyya_distance(hist1, hist2)

    # Calculate similarity score
    similarity_score = 1 - bhattacharyya_distance  # Closer to 1 is more similar

    return similarity_score

def check_matching(image1_url, image2_url):
    try:
        similarity_score = image_similarity_histogram(image1_url, image2_url)

        # Display the similarity score
        print(f"Similarity Score: {similarity_score}")

        # You can set a threshold for similarity and decide whether the images are similar or not
        similarity_threshold = 0.5  # Adjust the threshold as needed

        if similarity_score > similarity_threshold:
            return True
            print("Images are similar.")
        else:
            return False
            print("Images are not similar.")
    except Exception as e:
        print(e)
        return False
