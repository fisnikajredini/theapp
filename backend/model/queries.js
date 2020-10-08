const mongoose = require('mongoose');
const Delovodnik = mongoose.model(
    'delovodnikDB',
    {
        company_name: String,
        date: Date
    },
    'delovodnikDB'
);

const readAll = () => {
    return new Promise((success, fail) => {
        Delovodnik.find({}, (err, data) => {
            if (err) {
                return fail();
            }
            return success(data);
        });
    });
};

const createNew = (data) => {
    return new Promise((success, fail) => {
        let p = new Delovodnik(data);
        p.save((err) => {
            if (err) {
                return fail();
            }
            console.log("asdasdasd as das ")
            return success();
        });
    });
};

const remove = (id) => {
    return new Promise((success, fail) => {
        Delovodnik.deleteOne({ _id: id }, (err) => {
            if (err) {
                return fail();
            }
            return success();
        });
    });
};

const update = (id, data) => {
    return new Promise((success, fail) => {
        Delovodnik.updateOne({ _id: id }, data, (err) => {
            if (err) {
                return fail();
            }
            return success();
        });
    });
};

const getByEmail = (email) => {
    return new Promise((success, fail) => {
        Delovodnik.findOne({ email: email }, (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        })
    });
}

module.exports = {
    Delovodnik,
    readAll,
    createNew,
    remove,
    update,
    getByEmail
};