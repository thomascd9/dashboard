from PIL import Image, ImageTk
import os, random
from tkinter import *

all_images = []
for (root,dirs,files) in os.walk("./testimages/"):
    for f in files:
        all_images.append(os.path.join(root, f))
print(all_images)

print(random.choice(all_images))
curr_img = random.choice(all_images)

# Create object
root = Tk()

# Adjust size
root.geometry("400x400")

# Add image file
image = Image.open(curr_img)
bg = ImageTk.PhotoImage(image)
# bg = PhotoImage(file = "testimages/gettyimages-504662110.jpg")

# Create Canvas
canvas1 = Canvas(root, width = 400, height = 400)

canvas1.pack(fill = "both", expand = True)

# Display image
canvas1.create_image(0, 0, image = bg, anchor = "nw")
# Execute tkinter
root.mainloop()

# PIL test of opening an image
# for img_path in all_images:
#     print(img_path)
#     # img = Image.open(img_path)
#     # img.show()
# img = Image.open("./testimages/960x0.jpg")
# img.show()
