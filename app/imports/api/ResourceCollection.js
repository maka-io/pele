import changesets from 'diff-json';

export class ResourceCollection extends Mongo.Collection {
    /**
     * @public
     * @param { object } doc The document to inserted.
     * @param { object } callback The callback from invocation.
     * @returns { string } The _id of the new doc.
     */
    insert(doc, callback) {
        const result = super.insert(doc, callback);
        return result;
    }

    /**
     * @public
     * @param { object | string } selector The mongodb selector.
     * @param { object } modifier The mongodb modifier.
     * @returns { string } The _id of the document updated.
     * */
    update(selector, modifier) {
        const result = super.update(selector, modifier);
        return result;
    }

    /**
     * @public
     * @param { object | string } selector The mongodb selector.
     * @returns { string } The _id of the document being removed.
     */
    remove(selector) {
        const ourDoc = this.find(selector).fetch();
        const result = super.remove(selector);
        return result;
    }
}

