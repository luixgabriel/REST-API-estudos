class FotoController {
  async upload(req, res) {
    return res.json(req.file);
  }
}
export default new FotoController();
