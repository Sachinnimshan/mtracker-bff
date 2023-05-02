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
    const userID = req.params.id;
    const trackdata = await TrackItem.find({ creator: userID });
    res.status(200).send(trackdata);
  } catch (error) {
    res.status(401).send(error);
  }
};

export const createTrackItem = async (req, res) => {
  try {
    const newTransaction = req.body;
    const newItem = new TrackItem({ ...newTransaction, creator: req.userID });
    const postedItem = await newItem.save();

    if (posted) {
      res.status(201).send({ data: postedItem, message: "Item saved" });
    } else {
      res.status(401).send({ message: "Something went wrong" });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};
