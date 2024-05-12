export default function decorate(block) {
    console.log('children', [...block.children]);

    [...block.children].forEach((child) => {
        console.log('child', child.getElementsByTagName('picture'))
        if (child.getElementsByTagName('img').length > 0) {
            console.log('beans');
            const image = child.getElementsByTagName('img');
            console.log(image);
            image[0].className = 'picture44';
        } else {
            child.className = 'text123';
        }
    })
}
