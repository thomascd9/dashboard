# Note that this script is less tested, but should show you the
#   tools/methods you want to use to generate image_names.js

import os

all_images = []
# Substitute your file folder with ./testimages/
#   useful function: my_dir = os.path.expanduser('~/some_dir')
for (root,dirs,files) in os.walk("./testimages/"):
    for f in files:
        all_images.append(os.path.join(root, f))

print(all_images)
# Then copy/paste into your editor and make it a javascript const.
