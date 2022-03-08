# Note that this script is less tested, but should show you the
#   tools/methods you want to use to generate image_names.js

# Usage: python3 ~/<path to this file>/listphotos.py
#   Must be executed while in the directory with a folder named pics
#   that contains all pictures you want your dashboard to show.
#   Pictures may be in subdirectories though.

import os

all_images = []
# Substitute your file folder with ./testimages/
#   useful function: my_dir = os.path.expanduser('~/some_dir')
for (root,dirs,files) in os.walk("./pics/"):
    for f in files:
        if not f.startswith('.'):
            all_images.append(os.path.join(root, f))

# Remove the ./ part of string
clean_img_list = [x[2:] for x in all_images]

stop_here = len(clean_img_list)-1
with open('image_names.js', 'w') as f:
    f.write('const all_img_names = [')
    for idx,img in enumerate(clean_img_list):
        if idx == stop_here:
            f.write("'%s'" % img)
        else:
            f.write("'%s'," % img)
    f.write(']')
