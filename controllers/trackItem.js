import { Data } from "../data.js";
import TrackItem from "../models/trackItem.js";

export const feedTrackItems = async (req, res) => {
  try {
    await TrackItem.deleteMany({});
    const trackData = await TrackItem.insertMany(Data.trackData);
    res.status(200).send(trackData);
  } catch (error) {
    res.status(401).send(error);
  }
};

export const getAllTrackItems = async (req, res) => {
  try {
    const trackdata = await TrackItem.find({});
    res.status(200).send(trackdata);
  } catch (error) {
    res.status(401).send(error);
  }
};

export const createTrackItem = async (req, res) => {
  try {
    const trackItem = new TrackItem({
      title: req.body.title,
      amount: req.body.amount,
      type: req.body.type,
      typeName: req.body.typeName,
      date: req.body.date,
      note: req.body.note,
    });
    const newItem = await trackItem.save();
    if (newItem) {
      res.status(201).send({ message: "Item saved" });
    } else {
      res.status(401).send({ message: "Something went wrong" });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};
